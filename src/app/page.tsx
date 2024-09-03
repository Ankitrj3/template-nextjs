import Form from "./components/Form";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-14rem)] flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
        Customize your page...
      </h1>
      <Form />
    </main>
  );
}
