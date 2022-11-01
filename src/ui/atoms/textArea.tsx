import React, { useRef } from "react";
import { COLORS } from "config/colors";

interface ITextAreaProps {
  className?: string;
  value?: string;
  color?: string;
  width?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  padding?: string;
  border?: string;
  requirement?: string;
  onPressEnter: Function;
  getter?: any;
}


const TextArea: React.FC<ITextAreaProps> = ({
  className = "medium",
  value,
  color = COLORS.DARK_THEME_WHITE,
  width = "100%",
  onChange = null,
  placeholder,
  padding = "15px 40px 15px 70px",
  requirement = "",
  border = "1px solid transparent",
  onPressEnter,
  getter,
}) => {
  const currentRef = useRef<HTMLTextAreaElement>(null);
  return (
    <div style={{
      width: "100%"
    }}>
      <textarea
        ref={currentRef}
        onChange={
          onChange
            ? onChange
            : () => {
                getter(currentRef.current?.value);
              }
        }
        className={["atom-textarea", "atom-textarea-" + className].join(" ")}
        value={value}
        style={{
          width: width,
          padding: padding,
          border: border,
          fontSize: 15,
          color: color
        }}
        placeholder={placeholder}
        onKeyPress={evt => {
          if (evt.key === "Enter") {
            onPressEnter();
          }
        }}
      />
      {requirement.length > 0 && (
        <p style={{ fontSize: 12, marginTop: 2, paddingLeft: 5, color: "red" }}>
          {requirement}
        </p>
      )}
    </div>
  );
};

export default TextArea;
