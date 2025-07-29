import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DateTimePicker } from "@/components/ui/datetime-picker";
import { Copy, Check } from "lucide-react";

const Assistencia24h = () => {
    const [formData, setFormData] = useState({
        protocolo: "",
        dataHora: undefined as Date | undefined,
        placa: "",
        modelo: "",
        cor: "",
        solicitante: "",
        telefone: "",
        fatorGerador: "",
        observacaoFatorGerador: "",
        chaveDocumentoLocal: "",
        observacaoChaveDocumento: "",
        veiculoFacilAcesso: "",
        observacaoVeiculoFacilAcesso: "",
        servico: "",
        enderecoOrigem: "",
        referenciaOrigem: "",
        destino: "",
        referenciaDestino: "",
        quilometragem: "",
        quilometragemTotal: "",
        responsavelPagamento: "ASSOCIAÇÃO BR CLUBE DE BENEFÍCIOS",
    });
    const [isCopied, setIsCopied] = useState(false);
    const [generatedText, setGeneratedText] = useState("");

    const handleInputChange = (field: string, value: string | Date | undefined) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const generateText = () => {
        const text = `*Protocolo:* ${formData.protocolo}
*Data:* ${formData.dataHora ? `${formData.dataHora.toLocaleDateString("pt-BR")} - Horário: ${formData.dataHora.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' })}` : ''}
*Placa:* ${formData.placa}
*Modelo:* ${formData.modelo}
*Cor:* ${formData.cor}
*Solicitante:* ${formData.solicitante}
*Telefone:* ${formData.telefone}
*Fator Gerador:* ${formData.fatorGerador}
*Observação do fator gerador:* ${formData.observacaoFatorGerador}
*Chave e documento no local:* ${formData.chaveDocumentoLocal === "sim" ? "Sim" : "Não"} ${formData.observacaoChaveDocumento}
*Observação:* ${formData.observacaoChaveDocumento}
*Veículo de fácil acesso:* ${formData.veiculoFacilAcesso === "sim" ? "Sim" : "Não"}
*Observação:* ${formData.observacaoVeiculoFacilAcesso}
*Serviço:* ${formData.servico}
*Endereço de Origem:* ${formData.enderecoOrigem}
*Referência de Origem:* ${formData.referenciaOrigem}
*Destino:* ${formData.destino}
*Referência de Destino:* ${formData.referenciaDestino}
*Quilometragem (km):* ${formData.quilometragem} km
*Quilometragem total (km):* ${formData.quilometragemTotal} km
*RESPONSÁVEL PELO PAGAMENTO:* ${formData.responsavelPagamento}`;

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
                <h1 className="text-2xl font-bold">PROTOCOLO DE ABERTURA</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="protocolo">Protocolo:</Label>
                            <Input id="protocolo" value={formData.protocolo} onChange={(e) => handleInputChange("protocolo", e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="dataHora">Data/Horário:</Label>
                            <DateTimePicker date={formData.dataHora} setDate={(date) => handleInputChange("dataHora", date)} />
                        </div>
                        <div>
                            <Label htmlFor="placa">Placa:</Label>
                            <Input id="placa" value={formData.placa} onChange={(e) => handleInputChange("placa", e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="modelo">Modelo:</Label>
                            <Input id="modelo" value={formData.modelo} onChange={(e) => handleInputChange("modelo", e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="cor">Cor:</Label>
                            <Input id="cor" value={formData.cor} onChange={(e) => handleInputChange("cor", e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="solicitante">Solicitante:</Label>
                            <Input id="solicitante" value={formData.solicitante} onChange={(e) => handleInputChange("solicitante", e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="telefone">Telefone:</Label>
                            <Input id="telefone" value={formData.telefone} onChange={(e) => handleInputChange("telefone", e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="fatorGerador">Fator Gerador:</Label>
                            <Input id="fatorGerador" value={formData.fatorGerador} onChange={(e) => handleInputChange("fatorGerador", e.target.value)} />
                        </div>
                        <div className="md:col-span-2">
                            <Label htmlFor="observacaoFatorGerador">Observação do fator gerador:</Label>
                            <Textarea id="observacaoFatorGerador" value={formData.observacaoFatorGerador} onChange={(e) => handleInputChange("observacaoFatorGerador", e.target.value)} />
                        </div>
                        <div>
                            <Label>Chave e documento está no local?</Label>
                            <RadioGroup value={formData.chaveDocumentoLocal} onValueChange={(value) => handleInputChange("chaveDocumentoLocal", value)} className="flex mt-2 space-x-4">
                                <div className="flex items-center space-x-2"><RadioGroupItem value="sim" id="chaveSim" /><Label htmlFor="chaveSim">Sim</Label></div>
                                <div className="flex items-center space-x-2"><RadioGroupItem value="nao" id="chaveNao" /><Label htmlFor="chaveNao">Não</Label></div>
                            </RadioGroup>
                        </div>
                        <div className="md:col-span-2">
                            <Label htmlFor="observacaoChaveDocumento">Observação:</Label>
                            <Textarea id="observacaoChaveDocumento" value={formData.observacaoChaveDocumento} onChange={(e) => handleInputChange("observacaoChaveDocumento", e.target.value)} />
                        </div>
                        <div>
                            <Label>Veículo de Fácil Acesso?</Label>
                            <RadioGroup value={formData.veiculoFacilAcesso} onValueChange={(value) => handleInputChange("veiculoFacilAcesso", value)} className="flex mt-2 space-x-4">
                                <div className="flex items-center space-x-2"><RadioGroupItem value="sim" id="acessoSim" /><Label htmlFor="acessoSim">Sim</Label></div>
                                <div className="flex items-center space-x-2"><RadioGroupItem value="nao" id="acessoNao" /><Label htmlFor="acessoNao">Não</Label></div>
                            </RadioGroup>
                        </div>
                        <div className="md:col-span-2">
                            <Label htmlFor="observacaoVeiculoFacilAcesso">Observação:</Label>
                            <Textarea id="observacaoVeiculoFacilAcesso" value={formData.observacaoVeiculoFacilAcesso} onChange={(e) => handleInputChange("observacaoVeiculoFacilAcesso", e.target.value)} />
                        </div>
                        <div className="md:col-span-2">
                            <Label htmlFor="servico">Serviço:</Label>
                            <Input id="servico" value={formData.servico} onChange={(e) => handleInputChange("servico", e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="enderecoOrigem">Endereço de Origem:</Label>
                            <Input id="enderecoOrigem" value={formData.enderecoOrigem} onChange={(e) => handleInputChange("enderecoOrigem", e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="referenciaOrigem">Referência de Origem:</Label>
                            <Input id="referenciaOrigem" value={formData.referenciaOrigem} onChange={(e) => handleInputChange("referenciaOrigem", e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="destino">Destino:</Label>
                            <Input id="destino" value={formData.destino} onChange={(e) => handleInputChange("destino", e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="referenciaDestino">Referência de Destino:</Label>
                            <Input id="referenciaDestino" value={formData.referenciaDestino} onChange={(e) => handleInputChange("referenciaDestino", e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="quilometragem">Quilometragem (km):</Label>
                            <Input id="quilometragem" value={formData.quilometragem} onChange={(e) => handleInputChange("quilometragem", e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="quilometragemTotal">Quilometragem total (km):</Label>
                            <Input id="quilometragemTotal" value={formData.quilometragemTotal} onChange={(e) => handleInputChange("quilometragemTotal", e.target.value)} />
                        </div>
                        <div className="md:col-span-2">
                            <Label htmlFor="responsavelPagamento">Responsável pelo Pagamento:</Label>
                            <Input id="responsavelPagamento" value={formData.responsavelPagamento} onChange={(e) => handleInputChange("responsavelPagamento", e.target.value)} />
                        </div>
                    </div>
                    <div className="flex gap-4 mt-6">
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

export default Assistencia24h; 