import React from 'react'
import about from '../../img/about_img.jpg'

export default function AboutPage() {
  return (
    <section>
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
       Domowy budżet pod kontrolą, czyli pierwszy krok do planowania wydatków.
      </h2>
    </div>

    <div className="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src={about}
          alt="Man using a computer"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
          <p>
            
          </p>
            Głównym celem naszej strony jest stworzenie pierwszego kroku do planowania domowych wydatków.
            W zakładce wydatki wybierz przedział w którym chcesz kontrolować przepływ finansów w twoim budżecie. 
            Przygotowaliśmy zestaw kilku kategorii na podstawie naszych doświadczeń. Strona została uruchomiona 3 sierpinia 2022 i będzie dalej rozwijana.
            Przesłane przez ciebie dane będą grupowane i przedstawiane na wykresach, aby wizualnie zobrazować stan twoich finansów. 
            Masz pomysł jak rozwijać naszą aplikację ? Skorzystaj z sekcji kontakt i podziel się własnymi pomysłami. 

          <p>
           Kim jestem? zawodowo prowadzę projekty inwestycyjne w międzynarodowej korporacji. Your Home Budget stanowi dla mnie 
           wyzwanie programistyczne, ale również pozwala panować nad domowym budżetem w przyjemnej formie. W stopce znajdziesz linki do mojego konta LinkedIn i 
           konta GitHub
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
  )
}
