import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetScrollView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import styles from '@/utils/styles/SortFilter.module.css'
import FilterList from '@/components/FilterList'
import RangeSlider from '@/components/RangeSlider'
// recoil
import { isFilterShow } from '@/atoms/index'
import { useRecoilState } from 'recoil'

const snapPointsInitial = ["10%", "80%"]

const categories = [
  {
    id: "1-phone",
    name: "phone"
  },
  {
    id: "2-lapto",
    name: "lapto"
  },
  {
    id: "3-watch",
    name: "watch"
  }
];
const brands = ["dell", "apple"]
const ratings = ["all", "1", "2", "3", "4", "5"]


const SortFilter = () => {
  const [isFilter, setFilter] = useRecoilState(isFilterShow)
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => snapPointsInitial, []);

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
    if (index === -1) setFilter(false)
    if (index === 0) handleClosePress()
  }, []);

  const handleSnapPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(snapPointsInitial.length - 1);
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  useEffect(() => {
    if (isFilter) {
      handleSnapPress(1)
    } else {
      handleClosePress()
    }
  }, [isFilter])


  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={"close"}
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      handleIndicatorStyle={{ backgroundColor: "#F5F5F5" }}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetScrollView contentContainerStyle={styles.container}>
        <SortFilterComponent />
      </BottomSheetScrollView>
    </BottomSheet>
  )
}

export default SortFilter


const SortFilterComponent = () => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.contentTitle}>
        <Text style={styles.title}>Sort & Filter</Text>
      </View>
      {/* Categories */}

      <FilterList title="Categories" items={categories} />
    </View>
  )
}

