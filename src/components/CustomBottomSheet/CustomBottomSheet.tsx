import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {styles} from './customBottomSheet.style';
import {BottomSheetProps, BottomSheetRef} from '../../types';

const CustomBottomSheet = forwardRef<BottomSheetRef, BottomSheetProps>(
  ({children, snapPoints}, ref) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    useImperativeHandle(ref, () => ({
      present: () => {
        bottomSheetModalRef.current?.present();
      },
      close: () => {
        bottomSheetModalRef.current?.close();
      },
    }));

    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
          handleStyle={styles.handleStyle}>
          <BottomSheetView style={styles.container}>{children}</BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  },
);

export default CustomBottomSheet;
