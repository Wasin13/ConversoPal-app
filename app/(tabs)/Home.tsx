import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Platform } from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from 'expo-linear-gradient';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const HomeScreen = () => {
  return (
    <ScrollView className="bg-white flex-1">
      {/* Header */}
      <LinearGradient
        colors={['#2DAEF6', '#2DAEF6']}
        start={[0, 0]}
        end={[1, 0]}
        style={[styles.header, styles.shadow]}
      >
        <StyledView className="flex-row justify-between items-center relative">
          <StyledText className="text-lg text-white">Korean</StyledText>
          <StyledView className="flex-row items-center">           
          </StyledView>
          <StyledImage
            source={require('@/assets/images/yunjin.png')}
            className="absolute"
            style={{ height: 500, width: 500, right: -300, top: -75, transform: [{ rotate: '-40deg' }] }}
          />
        </StyledView>
        <StyledText className="text-lg text-black mt-4">Chat with your chingu Yunjin</StyledText>
        <StyledText className="text-2xl text-white mt-2">Hello Hannah,</StyledText>
        <StyledText className="text-4xl text-white font-bold">오늘 하루 어땠어?</StyledText>

        {/* Particles for Time Expressions */}
        <StyledView className="mt-4 flex-row items-center bg-white p-3 rounded-lg shadow">
          <StyledImage source={require('@/assets/images/pencil icon 3d.png')} className="h-12 w-12" />
          <StyledView className="flex-1">
            <StyledText className="text-black text-base font-bold">Particles for Time expressions</StyledText>
            <StyledText className="text-gray-500 text-sm">Time-related words (오늘, 내일, 어제, 지금)</StyledText>
          </StyledView>
          <StyledText className="text-black text-lg">Start</StyledText>
        </StyledView>
      </LinearGradient>

      {/* Lessons */}
      <StyledView className="p-4">
        <StyledView className="flex-row justify-between items-center mb-4">
          <StyledText className="text-xl font-bold">Your lessons</StyledText>
          <StyledView className="flex-row space-x-2">
            <StyledImage source={require('@/assets/images/hamburger icon.png')} className="h-5 w-5" />
            <StyledImage source={require('@/assets/images/drop down icon.png')} className="h-5 w-5" />
          </StyledView>
        </StyledView>
        <StyledView className="flex-row mb-4">
          <StyledView className="bg-white p-4 rounded-lg mr-2 flex-1 items-center" style={styles.lessonShadow}>
            <StyledImage source={require('@/assets/images/3d icon reading.png')} className="h-16 w-16" />
            <StyledText className="mt-2 font-semibold">Reading</StyledText>
            <StyledText className="text-sm text-gray-500 mt-1">You completed 90%</StyledText>
            <View className="w-full bg-gray-300 rounded-full h-1.5 dark:bg-gray-700 mt-2">
              <View className="h-1.5 rounded-full" style={{ width: '90%', backgroundColor: '#49E0AD' }}></View>
            </View>
          </StyledView>
          <StyledView className="bg-white p-4 rounded-lg flex-1 items-center" style={styles.lessonShadow}>
            <StyledImage source={require('@/assets/images/megaphone icon 3d.png')} className="h-16 w-16" />
            <StyledText className="mt-2 font-semibold">Pronunciation</StyledText>
            <StyledText className="text-sm text-gray-500 mt-1">You completed 85%</StyledText>
            <View className="w-full bg-gray-300 rounded-full h-1.5 dark:bg-gray-700 mt-2">
              <View className="h-1.5 rounded-full" style={{ width: '85%', backgroundColor: '#EC061C' }}></View>
            </View>
          </StyledView>
        </StyledView>
        <StyledView className="flex-row">
          <StyledView className="bg-white p-4 rounded-lg mr-2 flex-1 items-center" style={styles.lessonShadow}>
            <StyledImage source={require('@/assets/images/pencil icon 3d.png')} className="h-16 w-16" />
            <StyledText className="mt-2 font-semibold">Grammar</StyledText>
            <StyledText className="text-sm text-gray-500 mt-1">You completed 55%</StyledText>
            <View className="w-full bg-gray-300 rounded-full h-1.5 dark:bg-gray-700 mt-2">
              <View className="h-1.5 rounded-full" style={{ width: '55%', backgroundColor: '#FFB50C' }}></View>
            </View>
          </StyledView>
          <StyledView className="bg-white p-4 rounded-lg flex-1 items-center" style={styles.lessonShadow}>
            <StyledImage source={require('@/assets/images/headphones icon 3d.png')} className="h-16 w-16" />
            <StyledText className="mt-2 font-semibold">Listening</StyledText>
            <StyledText className="text-sm text-gray-500 mt-1">You completed 95%</StyledText>
            <View className="w-full bg-gray-300 rounded-full h-1.5 dark:bg-gray-700 mt-2">
              <View className="h-1.5 rounded-full" style={{ width: '95%', backgroundColor: '#2DAEF6' }}></View>
            </View>
          </StyledView>
        </StyledView>
      </StyledView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 40, // Increased padding to make the header larger
    paddingHorizontal: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#2DAEF6',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 8.3,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  lessonShadow: {
    shadowColor: '#00f',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
});

export default HomeScreen;
