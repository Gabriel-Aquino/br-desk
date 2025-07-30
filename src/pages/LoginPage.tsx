import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
    email: string;
    hd?: string;
}

interface LoginPageProps {
    onLoginSuccess: (credentialResponse: any) => void;
}

const LoginPage = ({ onLoginSuccess }: LoginPageProps) => {
    const handleSuccess = (credentialResponse: any) => {
        const decoded = jwtDecode<DecodedToken>(credentialResponse.credential);
        if (decoded.hd === "brclube.org") {
            onLoginSuccess(credentialResponse);
        } else {
            alert("Acesso restrito a usuários do domínio brclube.org");
        }
    };

    const handleError = () => {
        console.error("Login Failed");
        alert("Falha no login. Tente novamente.");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-md text-center">
                <img src="/Images/brclube2.png" alt="BR Clube Logo" className="w-24 h-24 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-brand-primary mb-2">BR Desk</h1>
                <p className="text-gray-600 mb-6">Faça login com sua conta Google para continuar</p>
                <div className="flex justify-center">
                    <GoogleLogin
                        onSuccess={handleSuccess}
                        onError={handleError}
                        useOneTap
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage; 