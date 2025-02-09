#!/bin/sh
cd ../
mkdir -p output
cp -R ./Spark-Front/* ./output  # 프로젝트 폴더 복사
cp -R ./output ./Spark-Front/  # 원본 프로젝트에도 복사