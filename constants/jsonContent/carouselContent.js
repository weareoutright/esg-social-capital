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
		img: <Image key="leader2" className="leader" src={LETTA} alt="" />,
		url: 'https://youtu.be/S6O32ODVh58',
	},
	{
		key: 'r-matta-barrera',
		name: 'Romanita Matta-Barrera',
		img: <Image key="leader2" className="leader" src={ROMANITA} alt="" />,
		url: 'https://youtu.be/Hr7DQfd9NbU',
	},
	{
		key: 't-jones',
		name: 'Trenisha Jones',
		img: <Image key="leader2" className="leader" src={TRENISHA} alt="" />,
		url: 'https://youtu.be/T3hB-S60YAc',
	},
	{
		key: 'a-goode',
		name: 'Andrea Goode',
		img: <Image key="leader2" className="leader" src={ANDREA} alt="" />,
		url: 'https://youtu.be/0gYTOlqsP9k',
	},
	{
		key: 'c-martinez',
		name: 'Claudia Martinez',
		img: <Image key="leader2" className="leader" src={CLAUDIA} alt="" />,
		url: 'https://youtu.be/NO2pLNZCGQM',
	},
	{
		key: 'f-camille',
		name: 'Freidericka Camille',
		img: <Image key="leader2" className="leader" src={FREIDERICKA} alt="" />,
		url: 'https://youtu.be/VTNmuLp37Jw',
	},
	{
		key: 'j-tousant',
		name: 'Jarrad Tousant',
		img: <Image key="leader2" className="leader" src={JARRAD} alt="" />,
		url: 'https://youtu.be/MlDtCCG_4HM',
	},
	{
		key: 'd-curry',
		name: 'Daryl Curry',
		img: <Image key="leader2" className="leader" src={DARYL} alt="" />,
		url: 'https://youtu.be/GziTEh7UWaQ',
	},
];
