// vendors
import useSWR from "swr";

// service
import { getEpisodesByIds } from "src/services/episodes-service";

export const useEpisodesData = (episodeIds: string[]) => {
  return useSWR(
    episodeIds.length ? [`episodes-${episodeIds.join(",")}`, episodeIds] : null,
    () => getEpisodesByIds(episodeIds)
  );
};
