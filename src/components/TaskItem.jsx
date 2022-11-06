import { BsCheckLg } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';

export const TaskItem = ({ name, completed }) => {
  return (
    <li
      className={`taskItem taskItem${
        completed ? '--isCompleted' : '--notIsCompleted'
      }`}
    >
      <span className={`setTaskCheck`}>
        <BsCheckLg />
      </span>
      <span className={`titleTaskItem`}>{name}</span>
      <span className={`deleteTask`}>
        <ImCross />
      </span>
    </li>
  );
};
