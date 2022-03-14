export default function Titre({ text='Nos missions', size = '160px', id = '#' }) {
  return <div
    id={id}
    style={{
      fontSize: 25,
      fontWeight: 'bold',
      margin: '0 auto',
      borderBottom: ' 3px solid blue',
      textAlign: 'center',
      maxWidth: size,
      marginTop: 5
    }}>
    {text}
  </div>
}