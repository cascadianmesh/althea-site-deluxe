smartresize() {
   mogrify -path $3 -filter Triangle -define filter:support=2 -thumbnail $2 -unsharp 0.25x0.08+8.3+0.045 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB $1
}

files=("roof_antenna.png")
sizes=(640 768 1024 1366 1600 1920)
for i in "${files[@]}"
do
  for j in "${sizes[@]}"
  do
    mkdir -p $j
    smartresize $i $j $j
  done
done


sizes=(640 768 1024 1366 1600 1920)
for j in "${sizes[@]}"
do
  for f in $j/*
  do
    g=$(basename $f)
    ext="${g##*.}"
    h="${g%.*}"
    mv $f $h-$j.$ext
  done
done
