import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { GlobalLayout } from "./shared/GlobalLayout.tsx";
import { Provider } from "./provider.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<GlobalLayout>
			<Provider>
				<App />
			</Provider>
		</GlobalLayout>
	</StrictMode>,
);
