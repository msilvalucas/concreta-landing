import { useNavigate } from 'react-router-dom'
import bgSuccess from './../../../assets/bg-step-success.png'

export const StepSuccess = () => {
  const navigate = useNavigate()

  return (
    <div
      className="container mx-auto w-full h-[682px] my-16 bg-cover bg-center flex items-center justify-center rounded-4xl"
      style={{ backgroundImage: `url(${bgSuccess})` }}
    >
      <div className="bg-[#F7E1B5]/80 text-center p-8 rounded-md max-w-[420px]">
        <h2 className="text-3xl font-bold text-[#0E1022] mb-2">Obrigado!</h2>
        <p className="text-[#0E1022] mb-6">
          Em breve nossa equipe retornará seu contato com mais informações
          sobre os nossos próximos passos
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#0E1022] text-white px-6 py-2 rounded"
        >
          Voltar para página inicial
        </button>
      </div>
    </div>
  )
}
