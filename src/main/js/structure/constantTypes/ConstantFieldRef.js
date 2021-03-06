function ConstantFieldRef (elementCountVar, byteArray, index) {
    var bytes = byteArray;
    var startByteIndex = index;
    var classIndex = getTwoBytes(bytes, index + 1);
    var nameAndTypeIndex = getTwoBytes(bytes, index + 3);

    /**
     * "tag item" is how the documentation refers to the type byte
     *
     * @return
     */
    this.getTag = function() {
        return 9;
    }

    /**
     * Index to the first byte of this section relative to the constant pool
     *
     * @return
     */
    this.getStartByteIndex = function() {
        return startByteIndex;
    }

    /**
     * length in bytes of this section
     *
     * @return length in bytes of this section
     */
    this.length = function() {
        return 5;
    }

    this.getEndByteIndex = function() {
        return this.getStartByteIndex() + this.length();
    }

    this.getCssClass = function() {
        return "ref-section";
    }

    this.getBytecode = function (index, constants) {
        var classStringValue = getIndirectString(classIndex, constants);
        var methodStringValue = getIndirectString(nameAndTypeIndex, constants);
        return "Fieldref<span class='tab'>&nbsp;</span>#" + classIndex + ".#" + nameAndTypeIndex +
        "<span class='tab'>&nbsp;</span>// " +
        classStringValue + " . " + methodStringValue;
    }

    this.contains = function (index) {
        if(index >= this.getStartByteIndex() && index < this.getStartByteIndex() + this.length()) {
            return true;
        }
        else {
            return false;
        }
    }


}
