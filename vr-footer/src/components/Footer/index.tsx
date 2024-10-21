import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer data-testid="vr-footer-test" className="w-full py-8 border-t border-neutral-200">
      <div className="w-full max-w-[1440px] px-4 lg:px-12 mx-auto flex items-center gap-8">
        <img src={logo} alt="VR" className="w-12 h-12" />

        <p className="text-xs text-neutral-900">
          © 2024 VR Benefícios - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
