const Rastreamento = () => {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-brand-primary mb-6">Rastreamento</h1>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-4">Rastreamento de Encomendas</h2>
          <p className="text-gray-600 mb-6">
            Acompanhe o status de suas encomendas e entregas.
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-yellow-800 mb-2">Digite o código de rastreamento</h3>
            <div className="flex gap-3">
              <input 
                type="text" 
                placeholder="Ex: BR123456789" 
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
              <button className="px-4 py-2 bg-brand-primary text-white rounded-md hover:bg-brand-secondary transition-colors">
                Rastrear
              </button>
            </div>
          </div>
          
          <div className="text-center text-gray-500">
            <p>Em breve: Sistema completo de rastreamento integrado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rastreamento;