import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { DateTimePicker } from "@/components/ui/datetime-picker";
import { Copy, Check } from "lucide-react";

const AgendamentoOficina = () => {
    const [formData, setFormData] = useState({
        nomeOficina: "",
        responsavel: "",
        servicoAgendado: "",
        dataHora: undefined as Date | undefined,
        endereco: "",
    });
    const [isCopied, setIsCopied] = useState(false);
    const [generatedText, setGeneratedText] = useState("");

    const handleInputChange = (field: string, value: string | Date | undefined) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const generateText = () => {
        const text = `*Confirmação do seu agendamento na* ${formData.nomeOficina} *com o responsável:* ${formData.responsavel}.
*Data e horário do agendamento:* ${formData.dataHora ? formData.dataHora.toLocaleString("pt-BR", { dateStyle: 'short', timeStyle: 'short' }).replace(",", "") : ''}
*Serviço agendado:* ${formData.servicoAgendado}
*Local:* ${formData.endereco}

Recomendamos a retirada dos objetos de valor de dentro de seu veículo antes do atendimento.

*Obs:* Muito importante a sua pontualidade para que possam também ser pontuais no seu atendimento.

Caso não possa comparecer, por gentileza nos informar através desse canal ou no telefone 4020-0164

Cordialmente,

Central de Agendamento

*BR Clube.*`;

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
                <h1 className="text-2xl font-bold">AGENDAMENTO PARA OFICINA</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="nomeOficina">Nome da oficina:</Label>
                            <Input id="nomeOficina" value={formData.nomeOficina} onChange={(e) => handleInputChange("nomeOficina", e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="responsavel">Responsável:</Label>
                            <Input id="responsavel" value={formData.responsavel} onChange={(e) => handleInputChange("responsavel", e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="servicoAgendado">Serviço agendado:</Label>
                            <Input id="servicoAgendado" value={formData.servicoAgendado} onChange={(e) => handleInputChange("servicoAgendado", e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="dataHora">Data/Horário:</Label>
                            <DateTimePicker date={formData.dataHora} setDate={(date) => handleInputChange("dataHora", date)} />
                        </div>
                        <div>
                            <Label htmlFor="endereco">Endereço:</Label>
                            <Textarea id="endereco" value={formData.endereco} onChange={(e) => handleInputChange("endereco", e.target.value)} />
                        </div>

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
                                <Button onClick={copyToClipboard} variant="outline" size="sm" className="bg-green-600 text-white hover:bg-green-700">
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

export default AgendamentoOficina; 