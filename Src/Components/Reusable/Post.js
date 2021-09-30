import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { styles } from './ReusableStyle'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Avatar from './Avatar'
import { widthPercentageToDP } from '../../Theme/HeightWidth'

const Post = ({ sourceUser, userName, time, postDetail, sourcePost, likes, comments  }) => {
    return (
        <View style={{ flex: 1, paddingVertical: 20 }}>
            <View style={styles.postHeader}>
                <View style={styles.row}>
                    <Avatar
                        source={sourceUser}
                    />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={styles.postText}>{userName}</Text>
                        <View style={styles.row}>
                            <Text style={styles.timeText}>{time}</Text>
                            <Entypo
                                name={'dot-single'}
                                size={12}
                                color='#747476'
                            />
                            <Entypo
                                name={'globe'}
                                size={10}
                                color='#747476'
                            />
                        </View>
                    </View>
                </View>

                <Entypo
                    name={'dots-three-horizontal'}
                    size={15}
                    color='#222121'
                />
            </View>

            <Text style={styles.postDetails}>
                {postDetail}
            </Text>
            <Image style={styles.postImage} source={sourcePost} />

            <View>
                <View style={styles.footerCount}>
                    <View style={styles.row}>
                        <View style={styles.iconCount}>
                            <AntDesign
                                name={'like1'}
                                size={12}
                                color='#FFFFFF'
                            />
                        </View>
                        <Text style={styles.textCount}>{likes}</Text>
                    </View>
                    <Text style={styles.textCount}>{comments}</Text>
                </View>

                <View style={styles.separator} />

                <View style={styles.footerMenu}>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 6}}>
                            <AntDesign
                                name={'like2'}
                                size={20}
                                color='#424040'
                            />
                        </View>
                        <Text style={styles.footerMenuText}>Like</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection: 'row'}}>
                    <View style={{marginRight: 6}}>
                            <MaterialCommunityIcons
                                name={'comment-outline'}
                                size={20}
                                color='#424040'
                            />
                        </View>
                        <Text style={styles.footerMenuText}>Comment</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection: 'row'}}>
                    <View style={{marginRight: 6}}>
                            <MaterialCommunityIcons
                                name={'share-outline'}
                                size={20}
                                color='#424040'
                            />
                        </View>
                        <Text style={styles.footerMenuText}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomDivider} />
        </View>
    )
}

export default Post