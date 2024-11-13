import { InputWrapper, Input } from './styles';

/**
 * Um componente de input reutilizável que pode ser usado em diferentes partes do aplicativo.
 * @param {string} value - O valor do input.
 */
const CustomInput = ({ value }) => {
  return (
    <InputWrapper>
      {/* Desestruture as propriedades e passe apenas as necessárias para o input */}
      <Input readOnly value={value} />
    </InputWrapper>
  );
};

export default CustomInput;
