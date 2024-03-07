import { ReactElement } from "react";

import Close from "../../icons/Close";

const Modal = ({
  children,
  onClose,
  title,
  mounted,
  titleClassNames,
}: Props): ReactElement => {
  return (
    <div
      className={`
        absolute
        top-0
        left-0
        h-screen
        w-screen
        bg-veryDarkBlue
        bg-opacity-40
        ${mounted ? 'flex flex-row items-center justify-center' : 'hidden'}
      `}
      data-testid={`modal-${title}`}
    >
      <div className="bg-white rounded p-5 w-max">
        <div className="w-full flex flex-row items-center justify-end mb-5">
          <div className="w-full flex flex-row items-center">
            <span className={`${titleClassNames ? titleClassNames : ''}`}>
              {title}
            </span>
          </div>
          <button
            className="w-5 h-5 text-veryDarkBlue cursor-pointer ml-5"
            onClick={onClose}
            aria-label="closeButton"
          >
            <Close />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

interface Props {
  children: ReactElement;
  onClose: () => void;
  title?: string;
  mounted: boolean;
  titleClassNames?: string;
}

export default Modal;
