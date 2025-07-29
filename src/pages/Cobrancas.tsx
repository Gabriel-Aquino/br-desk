import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Copy, Check, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";

interface Boleto {
  data: Date | undefined;
  valor: string;
}

const Cobrancas = () => {
  const [formData, setFormData] = useState({
    nome: "",
    placa: "",
    genero: "",
  });
  const [boletos, setBoletos] = useState<Boleto[]>([]);
  const [novoBoleto, setNovoBoleto] = useState<Boleto>({
    data: undefined,
    valor: "",
  });
  const [isCopied, setIsCopied] = useState(false);
  const [generatedText, setGeneratedText] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBoletoChange = (field: keyof Boleto, value: any) => {
    setNovoBoleto((prev) => ({ ...prev, [field]: value }));
  };

  const adicionarBoleto = () => {
    if (novoBoleto.data && novoBoleto.valor) {
      setBoletos([...boletos, novoBoleto]);
      setNovoBoleto({ data: undefined, valor: "" });
    }
  };

  const removerBoleto = (index: number) => {
    setBoletos(boletos.filter((_, i) => i !== index));
  };

  const formatCurrency = (value: string) => {
    const numberValue = parseFloat(value);
    return isNaN(numberValue) ? "0,00" : numberValue.toFixed(2).replace(".", ",");
  };

  const formatDate = (date: Date | undefined) => {
    return date ? date.toLocaleDateString("pt-BR") : "";
  };

  const generateText = () => {
    const total = boletos.reduce((acc, boleto) => acc + parseFloat(boleto.valor || "0"), 0);
    const generoText = formData.genero === "masculino" ? "Sr." : "Sra.";

    const boletosText = boletos
      .map(
        (boleto) => `Vencimento: ${formatDate(boleto.data)}\nValor: R$ ${formatCurrency(boleto.valor)}`
      )
      .join("\n\n");

    const text = `Olá, ${formData.nome}!

Tudo bem com você?

${generoText} ${formData.nome}, até o presente momento nosso sistema não identificou o pagamento dos seguintes boletos vencidos.

Placa/Veículo: ${formData.placa}

${boletosText}

TOTAL: R$ ${formatCurrency(total.toString())}

Neste caso, informamos que o pagamento AINDA poderá ser feito via PIX, sem ocorrência de juros por atraso.

Nosso código pix é CNPJ:

40.410.992/0001-40

Após o pagamento, compartilhe o comprovante por aqui, por gentileza, para informarmos a baixa no sistema.

Caso o pagamento já tenha sido realizado, por favor desconsiderar essa mensagem.

De já, externamos nossa gratidão!

Equipe BrClube!`;

    setGeneratedText(text);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar texto:", err);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-brand-primary text-white text-center py-4 mb-6 rounded-lg">
        <h1 className="text-2xl font-bold">UTILITÁRIOS</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="nome">Nome:</Label>
              <Input
                id="nome"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                placeholder="Nome do cliente"
              />
            </div>

            <div>
              <Label htmlFor="placa">Placa/Veículo:</Label>
              <Input
                id="placa"
                value={formData.placa}
                onChange={(e) => handleInputChange("placa", e.target.value)}
                placeholder="Placa ou veículo"
              />
            </div>

            <div>
              <Label htmlFor="genero">Gênero:</Label>
              <Select onValueChange={(value) => handleInputChange("genero", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o gênero" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="masculino">Masculino</SelectItem>
                  <SelectItem value="feminino">Feminino</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-bold mb-2">Boletos Vencidos</h3>
              <div className="space-y-2">
                <Label>Data de Vencimento:</Label>
                <DatePicker
                  date={novoBoleto.data}
                  setDate={(date) => handleBoletoChange("data", date)}
                />
              </div>
              <div className="space-y-2 mt-2">
                <Label>Valor:</Label>
                <Input
                  value={novoBoleto.valor}
                  onChange={(e) => handleBoletoChange("valor", e.target.value)}
                  placeholder="0,00"
                  type="number"
                />
              </div>
            </div>

            {boletos.length > 0 && (
              <div className="border-t pt-4">
                {boletos.map((boleto, index) => (
                  <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded-lg mb-2">
                    <span>{formatDate(boleto.data)} - R$ {formatCurrency(boleto.valor)}</span>
                    <Button variant="ghost" size="sm" onClick={() => removerBoleto(index)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-4">
              <Button onClick={generateText} className="w-full bg-green-600 hover:bg-green-700">
                Enviar
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Texto Gerado:</h3>
              {generatedText && (
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  size="sm"
                  className="bg-green-600 text-white hover:bg-green-700"
                >
                  {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {isCopied ? "Copiado!" : "Copiar Texto"}
                </Button>
              )}
            </div>

            {generatedText && (
              <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-line text-sm">
                {generatedText}
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Cobrancas;