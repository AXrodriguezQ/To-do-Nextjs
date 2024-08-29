import React from 'react'

const page = () => {
  return (
    <article className="p-8 flex justify-start items-start flex-col select-none">
        <section className="flex flex-col gap-4 border-b-2 border-blue-300">
            <h4 className="font-bold text-5xl">Aqui puedes crear tus tareas!</h4>
            <p className="font-semibold text-xl mb-2">Recuerda que las tareas que crees se guardan solo en el caso de que las completes o las edites pero si las eliminas no las podras recuperar mas.</p>
        </section>
    </article>
  )
}

export default page