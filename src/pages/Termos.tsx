const Termos = () => {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-brand-primary mb-6">Termos</h1>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-4">Termos e Condições</h2>
          <p className="text-gray-600 mb-6">
            Consulte nossos termos de uso e políticas do BR Clube.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold mb-2">Termos de Uso</h3>
              <p className="text-gray-600 text-sm">
                Documento completo com as regras de utilização da plataforma.
              </p>
            </div>
            
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold mb-2">Política de Privacidade</h3>
              <p className="text-gray-600 text-sm">
                Como tratamos e protegemos seus dados pessoais.
              </p>
            </div>
            
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold mb-2">Regulamento do Clube</h3>
              <p className="text-gray-600 text-sm">
                Normas e diretrizes para participação no BR Clube.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Em breve: Documentos completos disponíveis para download
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Termos;