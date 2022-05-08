import { AppProps } from 'next/app';
import GlobalStyle from '../public/styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
