import * as S from './dropDown.style';
import { ReactNode } from 'react';

const DropDown = ({
  label,
  options,
  placeholder,
  id,
  children,
}: {
  label?: string;
  options: Array<{ value: string; label: string }>;
  placeholder: string;
  id: string;
  children?: ReactNode;
}) => {
  return (
    <S.Display>
      {label && <S.InfoTitle>{label}</S.InfoTitle>}
      <div>
        <S.TypeChoice id={id}>
          {children ? (
            children
          ) : (
            <>
              <option value="1">{placeholder}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </>
          )}
        </S.TypeChoice>
      </div>
    </S.Display>
  );
};

export default DropDown;
