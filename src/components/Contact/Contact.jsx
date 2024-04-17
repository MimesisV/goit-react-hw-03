import { IoPersonSharp } from 'react-icons/io5';
import { FaSquarePhone } from 'react-icons/fa6';

export default function Contact({ data }) {
  return (
    <>
      <p>
        <IoPersonSharp />
        {data.name}
      </p>
      <p>
        <FaSquarePhone />
        {data.number}
      </p>
      <button type="button" name="delete">
        Delete
      </button>
    </>
  );
}
