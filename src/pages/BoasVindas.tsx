const BoasVindas = () => {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-brand-primary mb-6">Boas-vindas</h1>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-4">Bem-vindo ao BR Clube!</h2>
          <p className="text-gray-600 mb-4">
            Seja bem-vindo ao sistema BR Clube. Aqui você encontrará todas as ferramentas 
            e utilitários necessários para gerenciar suas atividades no clube.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">O que você pode fazer aqui:</h3>
            <ul className="text-blue-700 space-y-1">
              <li>• Verificar cobranças pendentes</li>
              <li>• Consultar eventos próximos</li>
              <li>• Rastrear encomendas</li>
              <li>• Acessar termos e condições</li>
              <li>• Utilizar serviços dos correios</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoasVindas;