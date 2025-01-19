import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { GlobalLayout } from "./shared/GlobalLayout.tsx";
import { Provider } from "./provider.tsx";
import { Loading } from "./loading.tsx";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<GlobalLayout>
			<Provider>
				<Loading>
					<App />
				</Loading>
			</Provider>
		</GlobalLayout>
	</StrictMode>,
);
