import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";

const BoasVindasBrPower = () => {
  const [formData, setFormData] = useState({
    nome: "",
    marca: "",
    amperagem: "",
    codigoBateria: ""
  });
  const [isCopied, setIsCopied] = useState(false);
  const [generatedText, setGeneratedText] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateText = () => {
    const text = `🚗⚡ Seja bem-vindo ao BR Power ${formData.nome}!

Parabéns! Agora, sua proteção está ainda mais completa.
Quando a vida útil da bateria ${formData.codigoBateria}, ${formData.marca}, ${formData.amperagem} do seu carro chegar ao fim, e ela não segurar mais carga, a BR Clube vai cuidar de tudo.

Você não vai precisar desembolsar nada a mais no momento da troca.

Nossa equipe técnica vai até você, com rapidez e eficiência, para resolver o problema.

💡 Com o BR Power, você protege seu carro e suas finanças.

Qualquer dúvida, conte com a gente.

🧡 BR Clube — Proteja do seu jeito. Inspire uma nova era.`;

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
        <h1 className="text-2xl font-bold">MENSAGEM DE BOAS-VINDAS BR POWER</h1>
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
              <Label htmlFor="marca">Marca:</Label>
              <Input
                id="marca"
                value={formData.marca}
                onChange={(e) => handleInputChange("marca", e.target.value)}
                placeholder="Digite a marca da bateria"
              />
            </div>

            <div>
              <Label htmlFor="amperagem">Amperagem:</Label>
              <Input
                id="amperagem"
                value={formData.amperagem}
                onChange={(e) => handleInputChange("amperagem", e.target.value)}
                placeholder="Digite a amperagem"
              />
            </div>

            <div>
              <Label htmlFor="codigoBateria">Cód. Bateria:</Label>
              <Input
                id="codigoBateria"
                value={formData.codigoBateria}
                onChange={(e) => handleInputChange("codigoBateria", e.target.value)}
                placeholder="Digite o código da bateria"
              />
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

export default BoasVindasBrPower;