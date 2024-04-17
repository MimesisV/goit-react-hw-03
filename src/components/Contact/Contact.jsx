export default function Contact({ data }) {
  return (
    <>
      <p>{data.name}</p>
      <p>{data.number}</p>
      <button type="button" name='delete'>Delete</button>
    </>
  );
}
