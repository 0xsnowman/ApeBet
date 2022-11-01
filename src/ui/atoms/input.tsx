import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { COLORS } from "config/colors";

interface IInputProps {
  className?: string;
  value?: string;
  color?: string;
  width?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: CSSProperties;
  padding?: string;
  border?: string;
  requirement?: string;
  onPressEnter: Function;
  getter?: any;
}

const Input: React.FC<IInputProps> = ({
  className = "medium",
  value,
  color = COLORS.DARK_THEME_WHITE,
  width = "100%",
  onChange = null,
  placeholder,
  style,
  padding = "15px 20px 15px 40px",
  requirement = "",
  border = "1px solid transparent",
  onPressEnter,
  getter,
}) => {
  const currentRef = useRef<HTMLInputElement>(null);
  const [required, setRequired] = useState<boolean>(false);

  useEffect(() => {
    if (currentRef.current?.value === "") {
      setRequired(true);
    } else {
      setRequired(false);
    }
  }, [currentRef.current?.value]);

  return (
    <div style={{
      width: "100%"
    }}>
      <input
        ref={currentRef}
        className={["atom-input", "atom-input-" + className].join(" ")}
        value={value}
        style={{
          width: width,
          padding: padding,
          justifyContent: "left",
          border: border,
          fontSize: 15,
          color: color
        }}
        onChange={
          onChange
            ? onChange
            : () => {
                getter(currentRef.current?.value);
              }
        }
        placeholder={placeholder}
        onKeyPress={(evt) => {
          if (evt.key === "Enter") {
            onPressEnter();
          }
        }}
      />
      {required && requirement !== "" && (
        <p style={{ fontSize: 12, marginTop: 2, paddingLeft: 5, color: "red" }}>
          {requirement}
        </p>
      )}
    </div>
  );
};

export default Input;
