#!/bin/sh
cd ../
mkdir -p output
cp -R ./my-project/* ./output  # 프로젝트 폴더 복사
cp -R ./output ./my-project/  # 원본 프로젝트에도 복사