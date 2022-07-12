import express from "express";
import CONFIG from "./Config";

async function main() {
	const app = express();

	app.listen(CONFIG.PORT, () => {
		console.log(`[SERVER]: App started on ${CONFIG.PORT}`);
	});
}

main();
