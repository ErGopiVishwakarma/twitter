import React from 'react'


const FollowButton = () => {
    const [followText, setFollowText] = useState('following')
const token = JSON.parse(localStorage.getItem('twitteruser'))

    const changeText = () => {
        setFollowText('unfollow')
      }
      const previousText = () => {
        setFollowText('following')
      }

    return (
        <Flex justifyContent={'flex-end'} pt="15px">
            {
                token._id === token._id ? <Button borderRadius={'50px'} border={'1px solid black'}
                    px="25px" py='10px'>Edit Profile</Button> :
                    profile.followers?.includes(token._id) ?
                        <Button borderRadius={'50px'} border={'1px solid black'} px="25px" py='10px'
                            color={followText === 'unfollow' ? 'red' : 'black'} onMouseOver={changeText}
                            onMouseOut={previousText} onClick={unfollowUser}>{followText}</Button> :
                        <Button borderRadius={'50px'} border={'1px solid black'} px="25px" py='10px'
                            bg='black' colorScheme='white' onClick={followUser}>Follow</Button>
            }
        </Flex>
    )
}

export default FollowButton