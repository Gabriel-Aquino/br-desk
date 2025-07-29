const Eventos = () => {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-brand-primary mb-6">Eventos</h1>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-4">Calendário de Eventos</h2>
          <p className="text-gray-600 mb-6">
            Acompanhe todos os eventos e atividades do BR Clube.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">Próximos Eventos</h3>
              <p className="text-purple-700 text-sm">Em breve: Lista de eventos programados</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Eventos do Mês</h3>
              <p className="text-blue-700 text-sm">Em breve: Calendário mensal</p>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-semibold text-orange-800 mb-2">Histórico</h3>
              <p className="text-orange-700 text-sm">Em breve: Eventos anteriores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventos;