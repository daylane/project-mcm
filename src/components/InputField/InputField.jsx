import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";

function InputField({ label, type, placeholder, value, onChange, className, mask, ...rest }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <Label className="mb-2">{label} </Label>}

      {mask ? (
        <InputMask
          mask={mask}
          value={value}
          onChange={onChange}
          {...rest}
        >
          {(inputProps) => <Input {...inputProps} type={type} placeholder={placeholder} />}
        </InputMask>
      ) : (
        <Input type={type} placeholder={placeholder} value={value} onChange={onChange} {...rest} />
      )}

      {label === "CEP" && <span className="text-xs">Pesquisa para preenchimento automático</span>}
    </div>
  );
}

// Definição dos PropTypes
InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  className: PropTypes.string,
  mask: PropTypes.string, // Nova propriedade de máscara
};

// Valores padrão para props opcionais
InputField.defaultProps = {
  type: "text",
  placeholder: "",
  value: "",
  className: "",
  mask: "", // Padrão sem máscara
};

export default InputField;
