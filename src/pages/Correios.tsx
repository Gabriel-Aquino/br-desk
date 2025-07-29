const Correios = () => {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-brand-primary mb-6">Correios</h1>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-4">Serviços dos Correios</h2>
          <p className="text-gray-600 mb-6">
            Acesse ferramentas e serviços relacionados aos correios.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Consulta CEP</h3>
              <p className="text-blue-700 text-sm">Encontre endereços pelo CEP</p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Calcular Frete</h3>
              <p className="text-green-700 text-sm">Simule valores de envio</p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">Agências</h3>
              <p className="text-purple-700 text-sm">Encontre agências próximas</p>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-semibold text-orange-800 mb-2">Código de Barras</h3>
              <p className="text-orange-700 text-sm">Gere códigos para envios</p>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">Entregas</h3>
              <p className="text-red-700 text-sm">Acompanhe entregas</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Mais Serviços</h3>
              <p className="text-gray-700 text-sm">Outros serviços postais</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Em breve: Integração completa com APIs dos Correios
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Correios;