import UserAddForm from './UserAddForm/UserAddForm';
import ChartComponent from './ChartComponent/ChartComponent';
import { Protected } from 'src/utils/Protected';
import {useState} from "react";

export default function UserDataPage() {
	const [key,setKey]=useState(0)
	return (
		<Protected>
			<>
				<UserAddForm setKey={setKey} />
				<ChartComponent key={key}/>
			</>
		</Protected>
	);
}
