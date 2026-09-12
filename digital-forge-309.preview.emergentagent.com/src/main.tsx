const StrictMode = __vite__cjsImport0_react["StrictMode"];const createRoot = __vite__cjsImport1_reactDom_client["createRoot"];const _jsxDEV = __vite__cjsImport8_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=0c8c6005";
import __vite__cjsImport1_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=0c8c6005";
import { QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=0c8c6005";
import { BrowserRouter } from "/node_modules/.vite/deps/react-router-dom.js?v=0c8c6005";
import "/src/index.css?t=1789167291791";
import App from "/src/App.tsx?t=1789167291791";
import { queryClient } from "/src/lib/queryClient.ts";
import { businessConfig } from "/src/data/businessConfig.ts?t=1789167291791";
var _jsxFileName = "/app/frontend/src/main.tsx";
import __vite__cjsImport8_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=0c8c6005";
document.title = businessConfig.seoTitle;
document.querySelector("meta[name=\"description\"]")?.setAttribute("content", businessConfig.seoDescription);
document.querySelector("meta[property=\"og:title\"]")?.setAttribute("content", businessConfig.seoTitle);
document.querySelector("meta[property=\"og:description\"]")?.setAttribute("content", businessConfig.seoDescription);
createRoot(document.getElementById("root")).render(/* @__PURE__ */ _jsxDEV(StrictMode, { children: /* @__PURE__ */ _jsxDEV(QueryClientProvider, {
	client: queryClient,
	"x-file-name": "main",
	"x-line-number": "17",
	"x-column": "4",
	"x-component": "QueryClientProvider",
	"x-id": "main_17_4",
	"x-dynamic": "false",
	children: /* @__PURE__ */ _jsxDEV(BrowserRouter, {
		"x-file-name": "main",
		"x-line-number": "18",
		"x-column": "6",
		"x-component": "BrowserRouter",
		"x-id": "main_18_6",
		"x-dynamic": "false",
		children: /* @__PURE__ */ _jsxDEV(App, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 7
	}, this)
}, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 14,
	columnNumber: 5
}, this) }, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 13,
	columnNumber: 53
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0Esa0JBQWtCO0FBQzNCLFNBQVNDLGtCQUFrQjtBQUMzQixTQUFTQywyQkFBMkI7QUFDcEMsU0FBU0MscUJBQXFCO0FBQzlCLE9BQU87QUFDUCxPQUFPQyxTQUFTO0FBQ2hCLFNBQVNDLG1CQUFtQjtBQUM1QixTQUFTQyxzQkFBc0I7OztBQUUvQkMsU0FBU0MsUUFBUUYsZUFBZUc7QUFDaENGLFNBQVNHLGNBQWMsNEJBQTBCLENBQUMsRUFBRUMsYUFBYSxXQUFXTCxlQUFlTSxjQUFjO0FBQ3pHTCxTQUFTRyxjQUFjLDZCQUEyQixDQUFDLEVBQUVDLGFBQWEsV0FBV0wsZUFBZUcsUUFBUTtBQUNwR0YsU0FBU0csY0FBYyxtQ0FBaUMsQ0FBQyxFQUFFQyxhQUFhLFdBQVdMLGVBQWVNLGNBQWM7QUFFaEhYLFdBQVdNLFNBQVNNLGVBQWUsTUFBTSxDQUFFLENBQUMsQ0FBQ0MsT0FDM0Msd0JBQUMsWUFBRCxZQUNFLHdCQUFDLHFCQUFEO0NBQXFCLFFBQVFUO0NBQVk7Q0FBQTtDQUFBO0NBQUE7Q0FBQTtDQUFBO1dBQ3ZDLHdCQUFDLGVBQUQ7RUFBYztFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7WUFDWix3QkFBQyxLQUFELENBQUk7Ozs7O0NBQ1M7Ozs7O0FBQ0k7Ozs7U0FDWDs7OztRQUNkIiwibmFtZXMiOlsiU3RyaWN0TW9kZSIsImNyZWF0ZVJvb3QiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiQnJvd3NlclJvdXRlciIsIkFwcCIsInF1ZXJ5Q2xpZW50IiwiYnVzaW5lc3NDb25maWciLCJkb2N1bWVudCIsInRpdGxlIiwic2VvVGl0bGUiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwic2VvRGVzY3JpcHRpb24iLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJtYWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpY3RNb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCdcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCAnLi9pbmRleC5jc3MnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnRzeCdcbmltcG9ydCB7IHF1ZXJ5Q2xpZW50IH0gZnJvbSAnLi9saWIvcXVlcnlDbGllbnQnXG5pbXBvcnQgeyBidXNpbmVzc0NvbmZpZyB9IGZyb20gJy4vZGF0YS9idXNpbmVzc0NvbmZpZydcblxuZG9jdW1lbnQudGl0bGUgPSBidXNpbmVzc0NvbmZpZy5zZW9UaXRsZVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKT8uc2V0QXR0cmlidXRlKCdjb250ZW50JywgYnVzaW5lc3NDb25maWcuc2VvRGVzY3JpcHRpb24pXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6dGl0bGVcIl0nKT8uc2V0QXR0cmlidXRlKCdjb250ZW50JywgYnVzaW5lc3NDb25maWcuc2VvVGl0bGUpXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIl0nKT8uc2V0QXR0cmlidXRlKCdjb250ZW50JywgYnVzaW5lc3NDb25maWcuc2VvRGVzY3JpcHRpb24pXG5cbmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSEpLnJlbmRlcihcbiAgPFN0cmljdE1vZGU+XG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgPEFwcCAvPlxuICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgPC9TdHJpY3RNb2RlPixcbilcbiJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvbWFpbi50c3gifQ==