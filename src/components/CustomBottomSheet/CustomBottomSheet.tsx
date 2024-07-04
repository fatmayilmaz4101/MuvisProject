import React, { forwardRef, useImperativeHandle, useRef, ReactNode } from 'react';
import { BottomSheetModal, BottomSheetView, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { StyleSheet, View } from 'react-native';
import { Color } from '../../utilities/Color';
import { styles } from './customBottomSheet.style';

interface BottomSheetProps {
  children: ReactNode;
  snapPoints: string[];
}

export interface BottomSheetRef {
  present: () => void;
  close: () => void;
}

const CustomBottomSheet = forwardRef<BottomSheetRef, BottomSheetProps>(({ children, snapPoints }, ref) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useImperativeHandle(ref, () => ({
    present: () => {
      bottomSheetModalRef.current?.present();
    },
    close: () => {
      bottomSheetModalRef.current?.close();
    }
  }));

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        handleStyle={{backgroundColor: Color.BackgroundColor }}
      >
        <View style={styles.container}>
          <BottomSheetView style={styles.contentContainer}>
            {children}
          </BottomSheetView>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

export default CustomBottomSheet;

