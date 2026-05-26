import { HashLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <HashLoader color="#254edb" size={52} />
    </div>
  );
}
