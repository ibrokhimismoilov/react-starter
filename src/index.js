import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { I18nextProvider } from "react-i18next";
import store, { persistor } from "store";
import { Provider } from "react-redux";
import { i18n } from "services";
import App from "App";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false
		}
	}
});

ReactDOM.render(
	<Provider store={store}>
		<I18nextProvider i18n={i18n()}>
			<PersistGate
				loading={<h1>Loading persist gade...</h1>}
				persistor={persistor}
			>
				<QueryClientProvider client={queryClient}>
					<App />
					<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
				</QueryClientProvider>
			</PersistGate>
		</I18nextProvider>
	</Provider>,
	document.getElementById("root")
);