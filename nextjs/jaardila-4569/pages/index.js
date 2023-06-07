import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>API Dogs</title>
        <meta name="description" content="Generated by Jorge Ardila" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="container my-5">
        <h1 class="mb-4">Bienvenido a nuestro proyecto de Next.js y API de perritos</h1>
        <p>En este proyecto, hemos creado una aplicación web utilizando el marco de trabajo Next.js para consumir el API de perritos y mostrar una lista de 10 razas con su respectiva foto.</p>
        <p>Para lograr esto, hemos utilizado el hook <code>useEffect</code> de React para hacer una solicitud al API de perritos y obtener la lista de razas. Luego, hemos utilizado el hook <code>useState</code> para guardar las razas en el estado y mostrarlas en la página utilizando un componente de lista.</p>
        <p>También hemos utilizado Bootstrap para estilizar la página y mostrar las imágenes en una grilla de dos columnas por cinco filas. Hemos agregado clases de Bootstrap a los elementos HTML y hemos utilizado estilos personalizados para ajustar el tamaño y la posición de las imágenes.</p>
        <p>Este proyecto es un ejemplo de cómo se pueden utilizar Next.js y APIs externas para crear aplicaciones web dinámicas e interactivas.</p>
        <a href="/dogs" class="btn btn-primary mt-3">Ver razas de perros</a>
      </div>

    </>
  )
}