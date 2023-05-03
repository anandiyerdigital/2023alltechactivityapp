import LoginForm from "./login-form";

const LoginPage = () => {
  return (
    <div className="grid w-full h-screen grid-cols-2">
      <LoginForm />
      <div className="border-l-2 bg-gradient-to-r from-amber-300 to-amber-700 border-amber-500" >
        <img src="https://creative.alltech.com/m/11050938965b66f1/Digital_JPG-Alltech-ONE-22-Make-a-Difference-Dash067.jpg" alt="running" className="object-contain w-full h-full" />
      </div>
    </div>
  );
};

export default LoginPage;
