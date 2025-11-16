import { TracksList } from '@/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import { trackTitleFilter } from '@/helpers/filter'
import { generateTracksListId } from '@/helpers/miscellaneous'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { useTracks } from '@/store/library'
import { defaultStyles } from '@/styles'
import { useMemo } from 'react'

const SongsScreen = () => {
    const search = useNavigationSearch({
        searchBarOptions: {
            placeholder: 'Find in songs',
        },
    })

    const tracks = useTracks()

    const filteredTracks = useMemo(() => {
        if (!search) return tracks
        return tracks.filter(trackTitleFilter(search))
    }, [search, tracks])

    return (
        <TracksList
            id={generateTracksListId('songs', search)}
            tracks={filteredTracks}
            
            contentInsetAdjustmentBehavior="automatic"
            style={defaultStyles.container}
            contentContainerStyle={{
                paddingHorizontal: screenPadding.horizontal,
            }}
            
            scrollEnabled={true} 
        />
    )
}

export default SongsScreen