package com.vgrazi.bytecodeexplorer.structure;

import com.vgrazi.bytecodeexplorer.utils.Utils;

/**
 * Created by vgrazi on 8/13/15.
 */
public class MagicNumberSection implements ClassFileSection {
    private long magicNumber;

    public MagicNumberSection(byte[] bytes) {
        magicNumber = Utils.getFourBytes(bytes, getStartByteIndex());
    }

    public long getMagicNumber() {
        return magicNumber;
    }

    @Override
    public int length() {
        return 4;
    }

    @Override
    public int getStartByteIndex() {
        return 0;
    }

    public boolean contains(int startByteIndex) {
        return startByteIndex >= getStartByteIndex() && startByteIndex < getStartByteIndex() + length();
    }

    public String toString() {
        return Utils.formatAsFourByteHexString(getStartByteIndex()) + " " + Utils.formatAsFourByteHexString(magicNumber);
    }
}
