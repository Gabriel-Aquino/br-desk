import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";

const BoasVindasAdesao = () => {
  const [formData, setFormData] = useState({
    nome: "",
    placa: "",
    vencimento: "",
    telefone: "",
    endereco: "",
    cep: "",
    email: "",
    genero: ""
  });
  const [isCopied, setIsCopied] = useState(false);
  const [generatedText, setGeneratedText] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateText = () => {
    const text = `✅ É muito importante que você confira todos os dados para que em caso de uma eventual ocorrência, possamos agilizar o processo e garantir a sua tranquilidade.

📱 *Placa:* ${formData.placa}

⚠️ *Vencimento dos seus boletos será todo dia:* ${formData.vencimento}

📱 *O boleto será enviado por WhatsApp para o número:* ${formData.telefone}

📍 *Seu endereço é:* ${formData.endereco}

🔢 *CEP:* ${formData.cep}

📧 *E-mail:* ${formData.email}

🎊 Parabéns por você escolher a BR CLUBE!
#UmaNovaExperiência #OsMelhoresBenefícios

🚨 *CASO NÃO* receba o boleto até 5 dias antes do vencimento favor entrar em contato conosco:

*NOSSO NÚMERO COMERCIAL:*

☎️ 4020-0164

*PARA ASSISTÊNCIA 24H:*

*Whatsapp:* 4020-0164`;
    
    setGeneratedText(text);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar texto:', err);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-brand-primary text-white text-center py-4 mb-6 rounded-lg">
        <h1 className="text-2xl font-bold">MENSAGEM DE BOAS-VINDAS</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="nome">Nome do associado(a):</Label>
              <Input
                id="nome"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                placeholder="Digite o nome do associado"
              />
            </div>

            <div>
              <Label htmlFor="placa">Placa:</Label>
              <Input
                id="placa"
                value={formData.placa}
                onChange={(e) => handleInputChange("placa", e.target.value)}
                placeholder="Digite a placa"
              />
            </div>

            <div>
              <Label htmlFor="vencimento">Dia de vencimento do boleto:</Label>
              <Input
                id="vencimento"
                value={formData.vencimento}
                onChange={(e) => handleInputChange("vencimento", e.target.value)}
                placeholder="Digite o dia de vencimento"
              />
            </div>

            <div>
              <Label htmlFor="telefone">Telefone:</Label>
              <Input
                id="telefone"
                value={formData.telefone}
                onChange={(e) => handleInputChange("telefone", e.target.value)}
                placeholder="Digite o telefone"
              />
            </div>

            <div>
              <Label htmlFor="endereco">Endereço:</Label>
              <Input
                id="endereco"
                value={formData.endereco}
                onChange={(e) => handleInputChange("endereco", e.target.value)}
                placeholder="Digite o endereço"
              />
            </div>

            <div>
              <Label htmlFor="cep">CEP:</Label>
              <Input
                id="cep"
                value={formData.cep}
                onChange={(e) => handleInputChange("cep", e.target.value)}
                placeholder="Digite o CEP"
              />
            </div>

            <div>
              <Label htmlFor="email">E-mail:</Label>
              <Input
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Digite o e-mail"
              />
            </div>

            <div>
              <Label>Gênero:</Label>
              <RadioGroup 
                value={formData.genero} 
                onValueChange={(value) => handleInputChange("genero", value)}
                className="flex flex-row space-x-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="masculino" id="masculino" />
                  <Label htmlFor="masculino">Masculino</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="feminino" id="feminino" />
                  <Label htmlFor="feminino">Feminino</Label>
                </div>
              </RadioGroup>
            </div>

            <Button onClick={generateText} className="w-full bg-green-600 hover:bg-green-700">
              Enviar
            </Button>
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

export default BoasVindasAdesao;