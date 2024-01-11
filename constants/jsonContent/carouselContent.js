import Image from 'next/image';
import LETTA from '../carousel/01_Letta.png';
import ROMANITA from '../carousel/02_Romanita.png';
import TRENISHA from '../carousel/03_Trenisha.png';
import ANDREA from '../carousel/04_Andrea.png';
import CLAUDIA from '../carousel/05_Claudia.png';
import FREIDERICKA from '../carousel/06_Freidericka.png';
import JARRAD from '../carousel/07_Jarrad.png';
import DARYL from '../carousel/08_Daryl.png';

export const CAROUSEL_CONTENT = [
	{
		key: 'l-neely',
		name: 'Letta Neely',
		org: 'Apprentice Learning',
		img: <Image key="leader2" className="leader" src={LETTA} alt="" />,
		url: 'https://youtu.be/S6O32ODVh58',
	},
	{
		key: 'c-martinez',
		name: 'Claudia Martinez',
		org: 'San Diego State University',
		img: <Image key="leader2" className="leader" src={CLAUDIA} alt="" />,
		url: 'https://youtu.be/NO2pLNZCGQM',
	},
	{
		key: 'a-goode',
		name: 'Andrea Goode',
		org: 'Pinellas County Schools',
		img: <Image key="leader2" className="leader" src={ANDREA} alt="" />,
		url: 'https://youtu.be/0gYTOlqsP9k',
	},
	{
		key: 'j-tousant',
		name: 'Jarrad Toussant',
		org: 'Dallas Regional Chamber',
		img: <Image key="leader2" className="leader" src={JARRAD} alt="" />,
		url: 'https://youtu.be/MlDtCCG_4HM',
	},
	{
		key: 'r-matta-barrera',
		name: 'Romanita Matta-Barrera',
		org: 'greater:SATX',
		img: <Image key="leader2" className="leader" src={ROMANITA} alt="" />,
		url: 'https://youtu.be/Hr7DQfd9NbU',
	},
	{
		key: 't-jones',
		name: 'Trenisha Jones',
		org: 'EmployIndy',
		img: <Image key="leader2" className="leader" src={TRENISHA} alt="" />,
		url: 'https://youtu.be/T3hB-S60YAc',
	},
	{
		key: 'f-camille',
		name: 'Freidericka Camille',
		org: 'The Universities at Shady Grove',
		img: <Image key="leader2" className="leader" src={FREIDERICKA} alt="" />,
		url: 'https://youtu.be/VTNmuLp37Jw',
	},
	{
		key: 'd-curry',
		name: 'Daryl Curry',
		org: 'Nashville Area Chamber of Commerce',
		img: <Image key="leader2" className="leader" src={DARYL} alt="" />,
		url: 'https://youtu.be/GziTEh7UWaQ',
	},
];
