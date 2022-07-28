import React from 'react';
import style from '../RodoPage/RodoPage.module.css';

export default function RodoPage() {
	return (
		<div>
			<h1 className={style.tittle}>
				Klauzula informacyjna RODO w zakresie przetwarzania danych osobowych
			</h1>
			<div className={style.rodo_wrapper}>
				<p className={style.paragraph}>
					1. Administratorem danych osobowych jest Bartosz Konarowski, dane
					kontaktowe: konarowski.bartosz@gmail.com, +48 789 352 232.
					<br />
					2. Administrator nie wyznaczył inspektora ochrony danych osobowych.
					<br />
					3. Przekazane dane osobowe przetwarzane będą w celu realizacji usług,
					obsługi zgłoszeń i udzielania odpowiedzi na zgłoszenia;
					<br />
					4. Kategorie danych osobowych obejmują m.in. imię i nazwisko, numer
					telefonu, adres e-mail, adres, dane dedykowane do
					procesu/usługi/projektu;
					<br />
					5. Pani /Pana dane osobowe mogą być przekazywane podmiotom
					przetwarzającym dane osobowe na zlecenie administratora: Na potrzeby
					funkcjonowania aplikacji, wprowadzone dane są przechowywane na
					usługach Firebase by Google.
					<br />
					6. Państwa dane osobowe będą przechowywane przez okres istnienia
					prawnie uzasadnionego interesu administratora, chyba że Pani / Pan
					wyrazi sprzeciw wobec przetwarzania danych;
					<br />
					7. Państwa dane nie będą przekazywane do państwa trzeciego ani
					organizacji międzynarodowej;
					<br />
					8. Posiadają Państwo prawo dostępu do treści swoich danych oraz prawo
					ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do
					przenoszenia danych, prawo wniesienia sprzeciwu, prawo do cofnięcia
					zgody w dowolnym momencie bez wpływu na zgodność z prawem
					przetwarzania, którego dokonano na podstawie zgody przed jej
					cofnięciem;
					<br />
					9. Mają Państwo prawo wniesienia skargi do organu nadzorczego
					zajmującego się ochroną danych osobowych, którym jest Prezes Urzędu
					Ochrony Danych Osobowych, gdy uznają Państwo, iż przetwarzanie Państwa
					danych osobowych narusza przepisy ustawy z dnia 10 maja 2018 r. o
					ochronie danych osobowych (tekst jednolity Dz. U. z 2018 r., poz.
					1000) lub przepisy Rozporządzenia Parlamentu Europejskiego i Rady (UE)
					2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych
					w związku z przetwarzaniem danych osobowych i w sprawie swobodnego
					przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
					rozporządzenie o ochronie danych) z dnia 27 kwietnia 2016 r.
					(Dz.Urz.UE.L Nr 119, str. 1);
					<br />
					10. Dane udostępnione przez Panią/Pana nie będą podlegały
					zautomatyzowanemu podejmowaniu decyzji oraz profilowaniu;
					<br />
					11. Dane pochodzą od osób, których dane dotyczą;<br/>
                    12. Podanie przez
					Państwa danych osobowych jest dobrowolne;
					<br />
				</p>
			</div>
		</div>
	);
}
