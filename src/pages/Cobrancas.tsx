const Cobrancas = () => {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-brand-primary mb-6">Cobranças</h1>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-4">Gestão de Cobranças</h2>
          <p className="text-gray-600 mb-6">
            Consulte e gerencie suas cobranças pendentes e histórico de pagamentos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">Cobranças Pendentes</h3>
              <p className="text-red-700">Em breve: Lista de cobranças em aberto</p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Pagamentos Realizados</h3>
              <p className="text-green-700">Em breve: Histórico de pagamentos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cobrancas;