import type { PageLoad } from './$types';
import { players } from '$lib/data/players.json';


export const load: PageLoad = async ({ params }) => {
	return {
        player: await getPlayer(params.slug)
	};
};

async function getPlayer(id: string) {
    const player = players.find((player) => player.id.toString() === id);
    if (!player) {
        return null;
    }
    return player;
}
